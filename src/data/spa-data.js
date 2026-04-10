function Article(title, text, image, category) {
    this.title = title;
    this.text = text;
    this.image = image;
    this.category = category;
}

export const articles = [
    new Article("test 1", "", "", "home",),
    new Article("Meet our Team", "", "maria.png", "team",),
    new Article("thoughts", "I've worked more on using grid this project and I can grasp it better now, the hardest part this time was the navigation because i needed it to have different colors depending on what page it was on and i just went in circles for hours and i think it was something stupid like an extra curly bracket that was the culprit.", "dog.jpg", "thoughts",),
    // new Article("test 4", "", "", "4",),
]

function ContactData(email, phone, text) {
    this.email = email;
    this.phone = phone;
    this.text = text;
}

export const contacts = [
    new ContactData("notreal@email.com", "+46-(0)00 00 00", "")
]

function TeamData(teamImg, teamTitle, teamName, teamInfo, teamPhone ) {
    this.teamImg = teamImg;
    this.teamTitle = teamTitle;
    this.teamName = teamName;
    this.teamInfo = teamInfo;
    this.teamPhone = teamPhone;

}

export const teamMembers = [
    new TeamData("default.png", "Lawyer", "Jane Doe", "notreal@email.com", "+46-(0)00 00 00",),
    new TeamData("default.png", "Lawyer", "Jane Doe", "notreal@email.com", "+46-(0)00 00 00",),
    new TeamData("default.png", "Lawyer", "Jane Doe", "notreal@email.com", "+46-(0)00 00 00",),
]



