/** 
 * AJAX: Asynchronous Javascript And XML 
 * => il s'agit d'un groupe de technologies indépendantes comme JS, DOM, XML, HTML/XHTML, CSS, XMLHttpRequest ...
 * 
 * XMLHttpRequest => utilisé pour la communication asynchrone entre le client et le serveur 
 *  il effectue les opérations suivantes :
 *  - Envoie des donncées du client en arrière-plan
 *  - Il reçoit les données du serveur
 *  - Met à jour la page web sans la recharger
 * 
 * Proprietés de l'objet XMLHttpRequest :
 * onReadyStateChange => il est appelé chaque fois que l'attribut readystate change. !! ne doit pas etre utilisé 
 * avec des requetes synchrones !! 
 * readystate : représente l'état de la demande 
 * 0 UNOPENNED : open() n'est pas appelé
 * 1 OPENED : open() est appelée mais send() n'est pas appelé
 * 2 HEADERS_RECEIVED send() est appelé et les en-tetes et le statut sont dispo
 * 3 LOADING télachargement des données ; responseText contient les données
 * 4 DONE : l'opération est entièrement terminée
 * responseText: renvoie la réponse sous forme de texte
 * responseXML : renvoie la réponse sous forme de XML
 * 
 * Méthodes XMLHttpRequest 
 *  void open(method, URL) => ouvre la demande en précisant le mode d'obtention ou d'envoi et l'URL
 *  void open (method,URL, async) => elle fait la meme chose que void open(method, URL)mais précise asynchrone ou non
 *  void open (method,URL, async, username, password) =>  elle fait la meme chose que void open (method,URL, async) 
 *  mais spécifie un username et un password
 *  void send() => envoie un get request
 *  void send(string) => envoie post request
 *  setRequestHeader(Header,value) : ajouter des en-tetes de requete
 * 
 * Ajax communique avec le serveur en utilisant l'objet XMLHttpRequest.
 * Explication du schéma : 
 * 1 - l'utilisateur envoie une demande à partir du UI (interface utilisateur) et un appel JS va à l'objet XMLHttpRequest
 * 2 - Une requète Http est envoyée au serveur par l'objet XMLHttpRequest
 * 3 - le serveur va interagir avec la base de donnée (mySQL, MangoDB, Oracle) en utilisant des langages de programmation tels que (PHP, JSP, Servlet, ASP.net ... )
 * 4 - les données sont récupérées
 * 5 - le serveur va envoyer des données XML ou bien JSON à la fonction callback() XMLHttpRequest
 * 6 - Les données HTML et CSS sont affichées sur le navigateur
 */