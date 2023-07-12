
const form = document.getElementById('submit-form')

const errorMessage = document.querySelector('.error-message');

$("#submit-form").submit((e)=>{
  e.preventDefault()

  let messages = [];
  if (form.name.value === '' || form.name.value == null) {
    messages.push('Name is required')
  }

  if (form.email.value.length <= 6) {
    messages.push('Email must be longer than 6 characters')
  }

  if (form.subject.value.length  <= 6) {
    messages.push('Subject must be longer than 6 characters')
  }

  if (messages.length > 0) {
    
    errorMessage.innerText = messages.join(', ')
    return;
  }


  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbzjQdFVdQZSdKQnrXUfrbCtrykl1ZQPvwLPFnBRsawV9_oKppRV_kBa9EliGz1Ui10g/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully")
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Error")

      }
  })
})