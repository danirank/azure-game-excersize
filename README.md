Gruppuppgift Spel till Azure


az staticwebapp create 
-n lektionslabb1
-g RG-Daniel-Rank-64f115-DotNetCloudDeveloper-VT-Mars-Goteborg 
-s https://github.com/danirank/azure-game-excersize.git 
-l swedencentral 
-b main 
--login-with-github 

az staticwebapp update
-n lektionslabb1
--tags env[=prod] owner[=kevin]
