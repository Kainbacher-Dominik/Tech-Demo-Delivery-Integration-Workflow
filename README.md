# Tech-Demo-Delivery-Integration-Workflow

# Repo fuer uebungen
https://github.com/Kainbacher-Dominik/workflow-automation

# App 
Simple application zur hochladen von daten von dem Client zu den server und von sever wieder herunterladen

# Deployment Strategy
Continues Delevery 
Github action to deploy docker container auf DockerHub

# CI Pipeline 
Die CI Pipeline ist mit GitHub Actionen implementiert  

## Testing 
Wenn Aenderungen Gepushed weren wird ein npm test in einen docker container ausgefuert      
uses Test.yml to do the testing

First sets up Envirnment in docker      
Runs all tests in docker container

## Containerisierung
In Docker using Dockerfile um 

Benutzt Dockerfile um work directory festzulegen application zu instalieren tests auszufueren 
docker-compose um das starten von docker zu definieren und besitzt pipelines um port der dockerfile weiterzuleiten

## Tests
### should upload a file successfully
    Tested ob Dateien erfolgreich hochgeladen wurde und in den definierten verzeichniss gespeichert wird

### try upload without file
    Tested ob eine fehlermeldung zurueck kommed wenn keine datei angegeben wird

### should fetch the list of files
    Tested das die Dataien in upload verzeichniss zum download uebergeben wird

### should fail to upload a JS File
    Tested den Datai filter indem es versucht eine JS datai hochzuladen 

## Build 
Build macht einen Clean Install fuer npm und fuert ein npx eslint aus

## Deployment
Deploys auf dockerhub zur einfeicher verfuegungs stellung von docker image mit Deployment.yml       

Deployment.yml Logged sich bei Docker Hub ein mit den login daten die in github secrets angegeben sind  
danach Bereitet es docker for und builded die docker compose file
und zuletzt pushed das erstellt docker image auf dockerhub.

## Konfigurationsdateien
Package.json and DockerFiles sind versioniert
Envirment Variables nicht im git    
DockerHub login daten in git hub secrets

## Sicherheitsüberprüfungen
Fuert test aus um zu testen das die Groeszte sicherheitsluecke abgedeckt ist bei versuchen codedataien hochzuladen

## IAC
Infrastucture as Code ist nicht vorhanden weil probleme mit Terraform authentication aufgetreden sind
