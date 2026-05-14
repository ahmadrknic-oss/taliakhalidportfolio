$msg = Read-Host "Enter update message"

git add .

git commit -m "$msg"

git push