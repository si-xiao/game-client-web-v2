#!/bin/bash

# 服务器部署脚本 - 在目标服务器上执行

# 从环境变量获取部署路径，如果没有则使用默认值
DEPLOY_PATH=${DEPLOY_PATH:-/opt/1panel/www/sites/www.kkgametop.xyz/index/}
OLD_VERSION_PATH='/opt/1panel/www/sites/www.kkgametop.xyz/index'

echo "开始执行部署脚本 - 解压构建的产物压缩包..."

# 解压构建产物
tar -xzvf /tmp/artifact.tar.gz -C /tmp/

echo "1------------------ls 输出index项目目录下的文件和目录 start------------------"
ls -l $DEPLOY_PATH
echo "1------------------ls 输出index项目目录下的文件和目录 end------------------"

# 备份旧版本（可选）
#if [ -d "$DEPLOY_PATH" ]; then
#    echo "Backing up previous version..."
#    sudo mv $DEPLOY_PATH "$OLD_VERSION_PATH-$(date +%Y%m%d%H%M%S)"
#fi

# 删除原index目录下的文件
echo "删除index目录下的所有旧版本文件..."
rm -rf $DEPLOY_PATH/{*,.*} 2>/dev/null || true

echo "2------------------ls 输出index项目目录下的文件和目录 start------------------"
ls -l $DEPLOY_PATH
echo "2------------------ls 输出index项目目录下的文件和目录 end------------------"

# 创建部署目录（如果不存在）
sudo mkdir -p $DEPLOY_PATH

# 复制新版本到部署目录
echo "拷贝新版本文件至部署目录(index)..."
sudo cp -r /tmp/artifact/* $DEPLOY_PATH

echo "3------------------ls 输出index项目目录下的文件和目录 start------------------"
ls -l $DEPLOY_PATH
echo "3------------------ls 输出index项目目录下的文件和目录 end------------------"

# 设置权限（根据你的服务器配置可能需要调整）
#sudo chown -R www-data:www-data $DEPLOY_PATH
#sudo chmod -R 755 $DEPLOY_PATH

# 清理临时文件
echo "清理临时文件（包括构建产物压缩包和部署脚本）..."
rm -rf /tmp/artifact /tmp/artifact.tar.gz /tmp/deploy.sh

echo "部署脚本执行结束，可前往【https://www.kkgametop.xyz】浏览新版本内容..."
