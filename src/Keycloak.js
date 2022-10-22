import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080/",
 realm: "poc-iris-loki",
 clientId: "frontend-app",
 checkLoginIframe: true,
});

export default keycloak;