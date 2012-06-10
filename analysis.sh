#! /bin/bash

set -e
set -u

n=$1
for wintbl in work/wintable.*; do
    tail -n ${n} $wintbl | head -n 1
done | awk '{s+=$1; print s}'
