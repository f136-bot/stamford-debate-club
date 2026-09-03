document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  const topicForm = document.getElementById('topicForm');
  const topicSuccessMessage = document.getElementById('topicSuccessMessage');
  const joinForm = document.getElementById('joinForm');
  const joinSuccessMessage = document.getElementById('joinSuccessMessage');
  const submitted = new URLSearchParams(window.location.search).get('submitted');

  if (submitted === '1') {
    if (successMessage) {
      successMessage.classList.add('show');
    }

    if (topicSuccessMessage) {
      topicSuccessMessage.classList.add('show');
    }

    if (joinSuccessMessage) {
      joinSuccessMessage.classList.add('show');
    }
  }

  if (form) {
    form.addEventListener('submit', function (event) {
      const formAction = form.action || '';

      if (!formAction.includes('formsubmit.co')) {
        event.preventDefault();

        if (successMessage) {
          successMessage.classList.add('show');
        }

        form.reset();
      }
    });
  }

  if (topicForm) {
    topicForm.addEventListener('submit', function (event) {
      const formAction = topicForm.action || '';

      if (!formAction.includes('formsubmit.co')) {
        event.preventDefault();

        if (topicSuccessMessage) {
          topicSuccessMessage.classList.add('show');
        }

        topicForm.reset();
      }
    });
  }

  if (joinForm) {
    joinForm.addEventListener('submit', function (event) {
      const formAction = joinForm.action || '';

      if (!formAction.includes('formsubmit.co')) {
        event.preventDefault();

        if (joinSuccessMessage) {
          joinSuccessMessage.classList.add('show');
        }

        joinForm.reset();
      }
    });
  }
});
