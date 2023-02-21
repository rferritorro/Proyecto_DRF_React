import http from "./http"

const NotificationService = {
    allNotifications() {
        return http().get("/server/alerts")
    },
    NotificationsUser(id) {
        return http().get("/server/alerts_AlertUser/"+ id)
    },
    addNotification(data, id) {
        return http().post("/server/alerts_AddAlert/"+ id, data)
    }
}

export default NotificationService;