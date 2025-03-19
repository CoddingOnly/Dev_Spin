document.addEventListener('DOMContentLoaded', function() {

  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Ваше сообщение отправлено!');
  });
});
document.getElementById("burger-btn").addEventListener("click", function() {
  document.getElementById("burger-menu").style.right = "0";
});

document.getElementById("close-btn").addEventListener("click", function() {
  document.getElementById("burger-menu").style.right = "-50%";
});



document.getElementById("register-btn").addEventListener("click", function() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phonePattern = /^\+?\d{10,15}$/;
  let namePattern = /^[А-Яа-яЁёA-Za-z\s]+$/;

  if (!name || !email || !phone) {
      alert("Заполните все поля в форме!");
      return;
  }

  if (!namePattern.test(name)) {
      alert("Введите корректное имя!");
      return;
  }

  if (!emailPattern.test(email)) {
      alert("Введите корректный E-Mail!");
      return;
  }

  if (!phonePattern.test(phone)) {
      alert("Введите корректный телефон!");
      return;
  }

  document.getElementById("modal").style.display = "flex";
});

document.getElementById("close-modal").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});


document.getElementById('close-modal').addEventListener('click', function(event) {
  document.getElementById('modal').style.display = 'none';
  window.location.href = 'curse.html'; 
});




document.addEventListener("DOMContentLoaded", function () {
    const openModal = document.getElementById("open-modal");
    const closeModal = document.getElementById("close-modal");
    const modal = document.getElementById("modal");

    openModal.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.add("show");
    });

    closeModal.addEventListener("click", function () {
        modal.classList.remove("show");
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });

    document.getElementById("register-btn").addEventListener("click", function () {
        modal.classList.remove("show");
    });
});



/* const courseButton = document.getElementById('course-button');
        const modalWindow = document.getElementById('modal-window');
        const closeWindow = document.getElementById('close-window');

        courseButton.addEventListener('click', function(event) {
            event.preventDefault();
            modalWindow.style.display = 'flex';
        });

        closeWindow.addEventListener('click', function() {
            modalWindow.style.display = 'none';
        });

        modalWindow.addEventListener('click', function(event) {
            if (event.target === modalWindow) {
                modalWindow.style.display = 'none';
            }
        });
                 */
        document.addEventListener('DOMContentLoaded', function() {

          const form = document.querySelector('form');
          form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Ваше сообщение отправлено!');
          });
        });
        document.getElementById("burger-btn").addEventListener("click", function() {
          document.getElementById("burger-menu").style.right = "0";
        });
        
        document.getElementById("close-btn").addEventListener("click", function() {
          document.getElementById("burger-menu").style.right = "-50%";
        });
        
        
        
        document.getElementById("register-btn").addEventListener("click", function() {
          let name = document.getElementById("name").value.trim();
          let email = document.getElementById("email").value.trim();
          let phone = document.getElementById("phone").value.trim();
        
          let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          let phonePattern = /^\+?\d{10,15}$/;
          let namePattern = /^[А-Яа-яЁёA-Za-z\s]+$/;
        
          if (!name || !email || !phone) {
              alert("Заполните все поля в форме!");
              return;
          }
        
          if (!namePattern.test(name)) {
              alert("Введите корректное имя!");
              return;
          }
        
          if (!emailPattern.test(email)) {
              alert("Введите корректный E-Mail!");
              return;
          }
        
          if (!phonePattern.test(phone)) {
              alert("Введите корректный телефон!");
              return;
          }
        
          document.getElementById("modal").style.display = "flex";
        });
        
        document.getElementById("close-modal").addEventListener("click", function() {
          document.getElementById("modal").style.display = "none";
        });
        
        
        document.getElementById('close-modal').addEventListener('click', function(event) {
          document.getElementById('modal').style.display = 'none';
          window.location.href = 'curse.html'; 
        });
        
        
        
        
        document.addEventListener("DOMContentLoaded", function () {
            const openModal = document.getElementById("open-modal");
            const closeModal = document.getElementById("close-modal");
            const modal = document.getElementById("modal");
        
            openModal.addEventListener("click", function (event) {
                event.preventDefault();
                modal.classList.add("show");
            });
        
            closeModal.addEventListener("click", function () {
                modal.classList.remove("show");
            });
        
            modal.addEventListener("click", function (event) {
                if (event.target === modal) {
                    modal.classList.remove("show");
                }
            });
        
            document.getElementById("register-btn1").addEventListener("click", function () {
                modal.classList.remove("show");
            });
        });
        

        