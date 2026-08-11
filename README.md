Gruppuppgift Spel till Azure


az staticwebapp create 
-n lektionslabb1
-g 
-s https://github.com/danirank/azure-game-excersize.git 
-l swedencentral 
-b main 
--login-with-github 

az staticwebapp update
-n lektionslabb1
--tags env[=prod] owner[=kevin]
