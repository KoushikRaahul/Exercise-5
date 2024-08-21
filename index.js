function checkAgeCategory() {
    const age = document.getElementById("ageInput").value;
    let category = '';
    let description = '';

    if (age < 0) {
        category = 'Invalid';
        description = 'Please enter a valid age.';
    } else if (age <= 2) {
        category = 'Infant';
        description = 'You are in the early stage of life, where growth and learning are rapid.';
    } else if (age <= 5) {
        category = 'Toddler';
        description = 'You are exploring the world around you, learning to walk, talk, and play.';
    } else if (age <= 12) {
        category = 'Child';
        description = 'This is a period of growth, learning, and developing social skills.';
    } else if (age <= 18) {
        category = 'Teenager';
        description = 'A time of self-discovery, growth, and preparation for adulthood.';
    } else if (age <= 35) {
        category = 'Young Adult';
        description = 'You are establishing your career, building relationships, and possibly starting a family.';
    } else if (age <= 50) {
        category = 'Middle-aged Adult';
        description = 'A period of stability, focusing on career, family, and personal goals.';
    } else if (age <= 65) {
        category = 'Mature Adult';
        description = 'You are likely focusing on personal achievements and preparing for retirement.';
    } else if (age > 65) {
        category = 'Senior';
        description = 'This stage is about enjoying the fruits of your labor, spending time with loved ones, and reflecting on life.';
    }

    document.getElementById("result").innerHTML = `<strong>${category}:</strong> ${description}`;
}
