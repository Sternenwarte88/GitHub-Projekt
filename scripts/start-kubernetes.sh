#/bin/bash
set -e
kubectl apply -f ../kubernetes/namespace.yaml
sleep 3
kubectl apply -f ../kubernetes/
