# exit when any command fails
set -e

TARGET_DIR=ops/generated

rm -rf ${TARGET_DIR}/*
mkdir -p ${TARGET_DIR}


for f in ./ops/*.yaml; do
  echo processing $f
  echo $(basename ${f})
  echo ${CI_BUILD_REF_SLUG}
  echo "${f}"
  jinja2 $f \
    --format=yaml --strict \
    -D CI_BUILD_REF_SLUG=${CI_BUILD_REF_SLUG} \
    >"${TARGET_DIR}/$(basename ${f})"
    cat "${TARGET_DIR}/$(basename ${f})"
done
echo "-"
echo " "

echo "applying namespace yaml"
kubectl apply -f ops/generated/namespace.yaml
echo "-"
echo " "

kubectl describe namespace website
echo "-"
echo " "

kubectl -n website apply -f ops/generated/
kubectl -n website rollout restart deployment website
