function calculateAge() {
    const dob = document.getElementById("dob").value;
    if (!dob) return;
    
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    document.getElementById("result").textContent = `You are ${age} years old.`;
}