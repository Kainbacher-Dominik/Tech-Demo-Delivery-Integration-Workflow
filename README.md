# Tech-Demo-Delivery-Integration-Workflow

# Repo fuer uebungen
https://github.com/Kainbacher-Dominik/workflow-automation

# App 
Simple application zur hochladen von daten von dem Client zu den server und von sever wieder herunterladen

# Tests
### should upload a file successfully
    Tested ob Dateien erfolgreich hochgeladen wurde und in den definierten verzeichniss gespeichert wird

### try upload without file
    Tested ob eine fehlermeldung zurueck kommed wenn keine datei angegeben wird

### should fetch the list of files
    Tested das die Dataien in upload verzeichniss zum download uebergeben wird

### should fail to upload a JS File
    Tested den Datai filter indem es versucht eine JS datai hochzuladen 

# Deployment
Recreate Deployment

Alte Version stoppen: Zuerst wird die alte Version gestoppt.  

Neue Version starten: Danach wird die neue Version gestartet.  

Einfaches deployment   

Kann zu Downtime fueren   

Downtown kann bei der kleinen application verkrafted werden  

# CI Pipeline 
Die CI Pipeline ist mit GitHub Actionen implementiert  

## Testing 
Wenn Aenderungen Gepushed weren wird ein npm test in einen docker container ausgefuert

## IAC
Infrastucture as Code ist nicht vorhanden weil probleme mit Terraform authentication aufgetreden sind

## Konfigurationsdateien versioniert
Package.json and DockerFiles sind versioniert 

## Konfigurationsdateien ausgenommen
Envirment Variables nicht im git

## Containerisierung
In Docker 

Benutzt Dockerfile and docker-compose

## Deployment 

## Branching
Each feacher gerts its own branch in github