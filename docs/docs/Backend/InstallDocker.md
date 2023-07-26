# 👨‍💻 Tutorial: Docker + Docker Compose (Ubunut/WSL)
This is a quick tutorial how to update/install docker with docker compose at ubuntu/wsl. 🐳

# Steps 📝
Copy and paste theese commands in the order. 👇
### 1️⃣ 
```shell
sudo apt-get update && sudo apt-get install -y ca-certificates curl gnupg lsb-release
```
### 2️⃣ 
```shell
sudo mkdir -p /etc/apt/keyrings
```
### 3️⃣
```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```
### 4️⃣
```shell
echo \
 "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
 $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
``` 
### 5️⃣
```shell
sudo apt-get update && sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
``` 
### 6️⃣
```shell
sudo chmod 666 /var/run/docker.sock
```
### 7️⃣ 
```shell
docker compose version
# Output
Docker Compose version v2.18.1
```