Gruppuppgift – Publicera ett spel i Azure

I den här gruppuppgiften publicerade vi ett webbaserat spel i Azure Static Web Apps. Projektets källkod finns på GitHub och applikationen distribuerades från repots main-branch.

Projekt

Azure-tjänst: Azure Static Web Apps

Namn på webbappen: lektionslabb1

Region: Sweden Central

Miljö: Produktion

Källkod: azure-game-excersize

Ansvarsfördelning

Gruppmedlem

Ansvar

Pontap

Stabiliserade och färdigställde spelet.

Kevin

Arbetade som game producer och samordnade utvecklingen.

Daniel

Driftsatte applikationen på sitt Azure-konto med stöd från Kevin och Pontap.

Vi planerade och satte projektets Azure-budget tillsammans. Samtliga gruppmedlemmar lades även till som contributors till webbappen, så att hela gruppen kunde arbeta med Azure-resursen.

Förutsättningar

För att skapa och konfigurera webbappen behövs:

Ett Azure-konto

Azure CLI installerat

Tillgång till GitHub-repot

En befintlig resursgrupp i Azure

Logga först in i Azure CLI:

az login

Skapa webbappen

Ersätt <resursgrupp> med namnet på den resursgrupp som ska användas.

az staticwebapp create \
  --name lektionslabb1 \
  --resource-group <resursgrupp> \
  --source https://github.com/danirank/azure-game-excersize.git \
  --location swedencentral \
  --branch main \
  --login-with-github

Kommandot skapar en Azure Static Web App och kopplar den till GitHub-repot. Azure konfigurerar samtidigt ett GitHub Actions-arbetsflöde som bygger och publicerar applikationen när ändringar skickas till main.

Lägg till taggar

Resursen märktes med taggar för miljö och ansvarig:

az staticwebapp update \
  --name lektionslabb1 \
  --resource-group <resursgrupp> \
  --tags env=prod owner=kevin

Taggarna gör det enklare att organisera, filtrera och följa upp resurser och kostnader i Azure.

Resultat

Spelet publicerades som en Azure Static Web App med automatisk driftsättning från GitHub. Gruppen delade på planering, utveckling, driftsättning, åtkomsthantering och budgetarbete.
