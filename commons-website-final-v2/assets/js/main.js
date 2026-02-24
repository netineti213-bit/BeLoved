// Demo submissions
const submissions = [
    {title: "Submission 1", status: "Provisional"},
    {title: "Submission 2", status: "Minority"},
    {title: "Submission 3", status: "Supported"},
    {title: "Submission 4", status: "Provisional"},
    {title: "Submission 5", status: "Supported"}
];

const container = document.getElementById("submission-container");
submissions.forEach(sub => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${sub.title}</strong> - Status: ${sub.status}`;
    container.appendChild(div);
});