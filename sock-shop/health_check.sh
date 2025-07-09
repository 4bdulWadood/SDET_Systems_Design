#!/bin/bash

# Port-forwarded URLs using localhost
declare -A services=(
  ["front-end"]="http://localhost:8080"
  ["orders"]="http://localhost:8081"
  ["catalogue"]="http://localhost:8082/health"
)

MAX_RETRIES=5
SLEEP_SECONDS=10

echo "🚦 Starting Health Checks via Port-Forwarding..."

for svc in "${!services[@]}"; do
  url="${services[$svc]}"
  echo -e "\n🔍 Checking health of \033[1m$svc\033[0m at \033[4m$url\033[0m"

  success=0
  for ((i = 1; i <= MAX_RETRIES; i++)); do
    status_code=$(curl -s -m 5 -o /dev/null -w "%{http_code}" "$url")
    
    if [[ "$status_code" == 2* ]]; then
      echo "✅ $svc is healthy (HTTP $status_code)."
      success=1
      break
    else
      echo "⚠️ Attempt $i: $svc not healthy yet (HTTP $status_code). Retrying in $SLEEP_SECONDS seconds..."
      sleep $SLEEP_SECONDS
    fi
  done

  if [[ $success -eq 0 ]]; then
    echo -e "❌ Health check failed for \033[1m$svc\033[0m after $MAX_RETRIES attempts."
    exit 1
  fi
done

echo -e "\n🎉 All services healthy. Proceeding!"
exit 0