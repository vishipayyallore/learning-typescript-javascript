# Script to update the Packages inside all folders.

function Update-Packages {
    param ( $CurrentFolderName )

    Write-Host "***** Working on $($CurrentFolderName) *****"

    Set-Location -Path $($CurrentFolderName)
    npm update
    npm i
}

[string[]]$folderNames = Get-ChildItem -Directory -Path .. | Where-Object { $_.Name -ne "PowerShellScripts" }

Foreach ($currentFolder in $folderNames) {
    Update-Packages -CurrentFolderName ..\$($CurrentFolder)
}

Set-Location -Path ..\PowerShellScripts
