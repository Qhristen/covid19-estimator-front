
const form = document.querySelector('.form');

form,addEventListener('submit', (e) => {
    e.preventDefault();
    const population = document.querySelector('input[data-population]').value;
    const timeElapse = document.querySelector('input[data-time-to-elapse]').value;
    const reportedCases = document.querySelector('input[data-reported-cases]').value;
    const hospitalBed = document.querySelector('input[data-total-hospital-beds]').value;
    const periodType = document.querySelector('select[data-period-type]').value;
    const regionName = document.querySelector('input[data-region-name]').value;
    const avgAge = document.querySelector('input[data-region-avgAge]').value;
    const avgDailyIcome = document.querySelector('input[data-region-avgDailyIncomeInUSD]').value;
    const avgDailyIcomePercentage = document.querySelector('input[data-region-avgDailyIncomePopulation]').value;

    const data ={
        region: {
            name: regionName,
            avgAge: avgAge,
            avgDailyIncomeInUSD: avgDailyIcome,
            avgDailyIncomePopulation: avgDailyIcomePercentage
        },
        periodType: periodType,
        timeToElapse: timeElapse,
        population: population,
        reportedCases: reportedCases,
        totalHospitalBeds: hospitalBed
    }
    const result = document.querySelector('.result');
    result.innerHTML = `${data.region.name}, ${data.periodType}, ${data.population}`;
    result.style.display = "flex";
    result.focus();
});