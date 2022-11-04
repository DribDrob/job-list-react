export function convertSalaryFormat(salary) {
  // from 60k-71k
  // to 60 000—71 000
  const salaryRange = salary.replaceAll('k', ' 000');
  return salaryRange;
}
