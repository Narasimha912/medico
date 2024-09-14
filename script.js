document.getElementById('reminder-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const medicineName = document.getElementById('medicine').value;
    const reminderTime = document.getElementById('time').value;
    
    if (!medicineName || !reminderTime) {
        return;
    }

    const reminderList = document.getElementById('reminder-list');
    const reminderItem = document.createElement('li');
    reminderItem.classList.add('reminder-item');
    reminderItem.innerText = `Reminder for ${medicineName} at ${reminderTime}`;

    reminderList.appendChild(reminderItem);

    document.getElementById('medicine').value = '';
    document.getElementById('time').value = '';

    setReminder(medicineName, reminderTime);
});

function setReminder(medicineName, reminderTime) {
    const now = new Date();
    const [hours, minutes] = reminderTime.split(':').map(Number);
    
    const reminderDate = new Date();
    reminderDate.setHours(hours);
    reminderDate.setMinutes(minutes);
    reminderDate.setSeconds(0);

    if (reminderDate < now) {
        reminderDate.setDate(reminderDate.getDate() + 1);
    }

    const timeout = reminderDate.getTime() - now.getTime();

    setTimeout(() => {
        playReminderSound();
        alert(`It's time to take your medicine: ${medicineName}`);
    }, timeout);
}

function playReminderSound() {
    const audio = new Audio('Vasthunna vachestunna song ringtone, v telugu movie ringtone.mp3'); // Path to your audio file
    audio.play();
}
