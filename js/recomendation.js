function recommendPlan() {
  // Obtener el ingreso ingresado por el usuario y el tipo de ingreso (mensual o anual) usando jQuery
  var income = $('#incomeInput').val();
  var incomeType = $('#incomeType').val();

  // Variable para almacenar la recomendación del plan
  var recommendedPlan = '';

  // Convertir el ingreso a ingreso anual si es necesario
  var annualIncome = (incomeType === 'monthly') ? income * 12 : income;

  // Lógica de recomendación de planes basada en el ingreso anual
  if (annualIncome < 30000) {
    recommendedPlan = 'Plan Básico';
  } else if (annualIncome < 60000) {
    recommendedPlan = 'Plan Premium';
  } else if (annualIncome < 100000) {
    recommendedPlan = 'Plan Empresarial (para PYMES)';
  } else {
    recommendedPlan = 'Plan Personalizado';
  }

  // Mostrar el plan recomendado en la página usando jQuery
  $('#recommendationResult').text('Plan recomendado: ' + recommendedPlan);

  // Mostrar el botón para ir al plan recomendado y asignarle una función onclick usando jQuery
  $('#gotoPlanBtn').show().click(function() { scrollToPlan(recommendedPlan); });
}

function scrollToPlan(planName) {
  // Inicializa una variable para almacenar el ID del plan
  var planId;

  // Utiliza una estructura switch para asignar el ID correcto basado en el nombre del plan
  switch(planName) {
    case 'Plan Básico':
      planId = '#PlanBasico';
      break;
    case 'Plan Premium':
      planId = '#PlanPremium';
      break;
    case 'Plan Empresarial (para PYMES)':
      planId = '#PlanEmpresarial';
      break;
    case 'Plan Personalizado':
      planId = '#PlanPersonalizado';
      break;
  }

  // Si se asignó un ID (es decir, si el nombre del plan era uno de los casos esperados)
  if (planId) {
    // Desplaza la vista del usuario hacia la tarjeta del plan correspondiente usando jQuery
    $(planId).get(0).scrollIntoView({ behavior: 'smooth' });
  }
}
