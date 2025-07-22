#!/bin/bash

pnpm install
# 先删除dist目录
[ -d "./dist" ] && rm -rf "./dist"
echo "等待 dist 目录生成..."
pnpm run build:prod

TARGET_DIR="./dist"
OUTPUT_NAME="game_client_pro_$(date +%Y%m%d_%H%M%S)"
MAX_WAIT=300
INTERVAL=2

wait_time=0
echo "开始检测dist目录是否存在..."
while [ ! -d "$TARGET_DIR" ]; do
  sleep $INTERVAL
  wait_time=$((wait_time + INTERVAL))

  if [ $wait_time -ge $MAX_WAIT ]; then
    echo "错误：等待 dist 目录超时（${MAX_WAIT}秒）"
    exit 1
  fi
done

echo "检测到 dist 目录，开始压缩..."

cd "$TARGET_DIR" || { echo "无法进入目录 $TARGET_DIR"; exit 1; }

# tar -czvf "${OUTPUT_NAME}.tar.gz" ./*
zip -r "${OUTPUT_NAME}.zip" ./*

echo "压缩完成！输出文件: ${OUTPUT_NAME}.zip"

