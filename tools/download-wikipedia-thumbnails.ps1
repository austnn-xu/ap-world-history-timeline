param(
  [string]$OutDir = ".\assets\wiki"
)

$ErrorActionPreference = "Stop"
$headers = @{
  "User-Agent" = "APWorldTimelineStudentProject/1.0 (local educational project)"
}

$pages = @(
  @{ Name = "song-dynasty"; Page = "Song_dynasty" },
  @{ Name = "mansa-musa"; Page = "Mansa_Musa" },
  @{ Name = "great-mosque-djenne"; Page = "Great_Mosque_of_Djenne" },
  @{ Name = "inca-empire"; Page = "Inca_Empire" },
  @{ Name = "mongol-empire"; Page = "Mongol_Empire" },
  @{ Name = "silk-road"; Page = "Silk_Road" },
  @{ Name = "ibn-battuta"; Page = "Ibn_Battuta" },
  @{ Name = "black-death"; Page = "Black_Death" },
  @{ Name = "ottoman-empire"; Page = "Ottoman_Empire" },
  @{ Name = "safavid-iran"; Page = "Safavid_Iran" },
  @{ Name = "mughal-empire"; Page = "Mughal_Empire" },
  @{ Name = "qing-dynasty"; Page = "Qing_dynasty" },
  @{ Name = "christopher-columbus"; Page = "Christopher_Columbus" },
  @{ Name = "potosi"; Page = "Potosi" },
  @{ Name = "atlantic-slave-trade"; Page = "Atlantic_slave_trade" },
  @{ Name = "manila-galleon"; Page = "Manila_galleon" },
  @{ Name = "french-revolution"; Page = "French_Revolution" },
  @{ Name = "haitian-revolution"; Page = "Haitian_Revolution" },
  @{ Name = "simon-bolivar"; Page = "Simon_Bolivar" },
  @{ Name = "industrial-revolution"; Page = "Industrial_Revolution" },
  @{ Name = "meiji-restoration"; Page = "Meiji_Restoration" },
  @{ Name = "opium-wars"; Page = "Opium_Wars" },
  @{ Name = "scramble-for-africa"; Page = "Scramble_for_Africa" },
  @{ Name = "indian-rebellion"; Page = "Indian_Rebellion_of_1857" },
  @{ Name = "world-war-i"; Page = "World_War_I" },
  @{ Name = "vladimir-lenin"; Page = "Vladimir_Lenin" },
  @{ Name = "treaty-versailles"; Page = "Treaty_of_Versailles" },
  @{ Name = "great-depression"; Page = "Great_Depression" },
  @{ Name = "world-war-ii"; Page = "World_War_II" },
  @{ Name = "the-holocaust"; Page = "The_Holocaust" },
  @{ Name = "united-nations"; Page = "United_Nations" },
  @{ Name = "cold-war"; Page = "Cold_War" },
  @{ Name = "mao-zedong"; Page = "Mao_Zedong" },
  @{ Name = "partition-india"; Page = "Partition_of_India" },
  @{ Name = "non-aligned"; Page = "Non-Aligned_Movement" },
  @{ Name = "globalization"; Page = "Globalization" },
  @{ Name = "green-revolution"; Page = "Green_Revolution" },
  @{ Name = "sputnik"; Page = "Sputnik_1" },
  @{ Name = "container-ship"; Page = "Container_ship" },
  @{ Name = "climate-change"; Page = "Climate_change" }
)

New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
$results = @()

foreach ($item in $pages) {
  try {
    $summaryUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/$($item.Page)"
    $summary = Invoke-RestMethod -Uri $summaryUrl -Headers $headers
    Start-Sleep -Milliseconds 900

    $imageUrl = $summary.thumbnail.source
    if (-not $imageUrl) {
      Write-Warning "No thumbnail for $($item.Page)"
      continue
    }

    $extension = if ($imageUrl -match "\.png") { "png" } else { "jpg" }
    $fileName = "$($item.Name).$extension"
    $outPath = Join-Path $OutDir $fileName
    Invoke-WebRequest -Uri $imageUrl -OutFile $outPath -Headers $headers
    Start-Sleep -Milliseconds 900

    $results += [pscustomobject]@{
      name = $item.Name
      page = $item.Page
      file = "assets/wiki/$fileName"
      sourceUrl = $summary.content_urls.desktop.page
      title = $summary.title
      description = $summary.description
    }
    Write-Host "Downloaded $fileName"
  } catch {
    Write-Warning "Failed $($item.Page): $($_.Exception.Message)"
  }
}

$results | ConvertTo-Json -Depth 4 | Set-Content -Path (Join-Path $OutDir "credits.json") -Encoding UTF8
Write-Host "Downloaded $($results.Count) files."
