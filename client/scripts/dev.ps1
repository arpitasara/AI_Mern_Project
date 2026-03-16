$connection = Get-NetTCPConnection -LocalPort 5173 -State Listen -ErrorAction SilentlyContinue

if ($connection) {
  Stop-Process -Id $connection.OwningProcess -Force
  Start-Sleep -Milliseconds 500
}

npm.cmd exec vite -- --host 127.0.0.1 --port 5173 --strictPort
