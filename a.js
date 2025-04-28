// مثال على استخدام جافا سكربت لإضافة تفاعل
document.addEventListener('DOMContentLoaded', () => {
  const welcomeMessage = document.querySelector('section h2');
  welcomeMessage.innerText += ' - مرحباً بك في تطبيق يُمن!';
});
