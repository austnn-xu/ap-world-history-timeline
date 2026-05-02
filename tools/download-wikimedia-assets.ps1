param(
  [string]$OutDir = ".\assets\apw"
)

$ErrorActionPreference = "Stop"
$headers = @{
  "User-Agent" = "APWorldTimelineStudentProject/1.0 (local educational project)"
}

$items = @(
  @{ Name = "song-china-city"; Query = "Song dynasty China city painting" },
  @{ Name = "great-mosque-djenne"; Query = "Great Mosque of Djenne" },
  @{ Name = "mansa-musa"; Query = "Mansa Musa Catalan Atlas" },
  @{ Name = "inca-terraces"; Query = "Inca terraces Andes" },
  @{ Name = "silk-road-caravan"; Query = "Silk Road caravan" },
  @{ Name = "mongol-empire-map"; Query = "Mongol Empire map" },
  @{ Name = "ibn-battuta"; Query = "Ibn Battuta illustration" },
  @{ Name = "black-death"; Query = "Black Death medieval manuscript" },
  @{ Name = "ottoman-sultan"; Query = "Suleiman the Magnificent" },
  @{ Name = "safavid-isfahan"; Query = "Shah Mosque Isfahan" },
  @{ Name = "taj-mahal"; Query = "Taj Mahal" },
  @{ Name = "qing-emperor"; Query = "Kangxi Emperor portrait" },
  @{ Name = "columbus-landing"; Query = "Columbus landing in America painting" },
  @{ Name = "potosi"; Query = "Cerro Rico Potosi" },
  @{ Name = "brookes-slave-ship"; Query = "Brookes slave ship diagram" },
  @{ Name = "manila-galleon"; Query = "Manila galleon" },
  @{ Name = "bastille"; Query = "Storming of the Bastille" },
  @{ Name = "rights-of-man"; Query = "Declaration of the Rights of Man and of the Citizen" },
  @{ Name = "haitian-revolution"; Query = "Haitian Revolution painting" },
  @{ Name = "simon-bolivar"; Query = "Simon Bolivar portrait" },
  @{ Name = "spinning-jenny"; Query = "Spinning Jenny" },
  @{ Name = "steam-engine"; Query = "Watt steam engine" },
  @{ Name = "crystal-palace"; Query = "Crystal Palace Great Exhibition 1851" },
  @{ Name = "meiji-emperor"; Query = "Meiji Emperor photograph" },
  @{ Name = "opium-war"; Query = "First Opium War painting" },
  @{ Name = "scramble-africa"; Query = "Scramble for Africa map" },
  @{ Name = "indian-rebellion"; Query = "Indian Rebellion 1857 painting" },
  @{ Name = "wwi-trench"; Query = "World War I trench" },
  @{ Name = "lenin"; Query = "Vladimir Lenin 1917" },
  @{ Name = "versailles"; Query = "Treaty of Versailles signing" },
  @{ Name = "great-depression"; Query = "Great Depression breadline" },
  @{ Name = "world-war-ii"; Query = "World War II Normandy landing" },
  @{ Name = "auschwitz"; Query = "Auschwitz concentration camp" },
  @{ Name = "united-nations"; Query = "United Nations General Assembly" },
  @{ Name = "berlin-wall"; Query = "Berlin Wall" },
  @{ Name = "mao-zedong"; Query = "Mao Zedong portrait" },
  @{ Name = "gandhi-spinning"; Query = "Gandhi spinning wheel" },
  @{ Name = "bandung-conference"; Query = "Bandung Conference 1955" },
  @{ Name = "container-ship"; Query = "container ship" },
  @{ Name = "green-revolution"; Query = "Norman Borlaug wheat" },
  @{ Name = "satellite"; Query = "Sputnik satellite" },
  @{ Name = "climate-change"; Query = "climate change glacier" }
)

New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
$results = @()

foreach ($item in $items) {
  $api = "https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=8&gsrsearch=$([uri]::EscapeDataString($item.Query))&prop=imageinfo&iiprop=url|mime|extmetadata&iiurlwidth=900"
  try {
    $response = Invoke-RestMethod -Uri $api -Headers $headers
    Start-Sleep -Milliseconds 550
    $page = $response.query.pages.PSObject.Properties.Value |
      Where-Object { $_.imageinfo -and $_.imageinfo[0].thumburl -and $_.imageinfo[0].mime -match "image/" } |
      Select-Object -First 1

    if (-not $page) {
      Write-Warning "No image found for $($item.Name)"
      continue
    }

    $info = $page.imageinfo[0]
    $extension = if ($info.mime -match "png") { "png" } else { "jpg" }
    $fileName = "$($item.Name).$extension"
    $outPath = Join-Path $OutDir $fileName

    Invoke-WebRequest -Uri $info.thumburl -OutFile $outPath -Headers $headers
    Start-Sleep -Milliseconds 650

    $artist = $info.extmetadata.Artist.value -replace "<[^>]+>", ""
    $license = $info.extmetadata.LicenseShortName.value
    $descriptionUrl = $info.descriptionurl
    $results += [pscustomobject]@{
      name = $item.Name
      query = $item.Query
      file = "assets/apw/$fileName"
      sourceTitle = $page.title
      sourceUrl = $descriptionUrl
      artist = $artist
      license = $license
    }
    Write-Host "Downloaded $fileName"
  } catch {
    Write-Warning "Failed $($item.Name): $($_.Exception.Message)"
  }
}

$results | ConvertTo-Json -Depth 4 | Set-Content -Path (Join-Path $OutDir "credits.json") -Encoding UTF8
Write-Host "Downloaded $($results.Count) files."
