
fetch(`https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`)
    .then(response => {
        response.json()
            .then(serverData => {
                console.log(serverData)

                let averageGradeHigherThan3 = serverData.filter((s) => s.averageGrade > 3)
                console.log(averageGradeHigherThan3);

                let allFemaleNamesWithAveragGrade5 = serverData
                    .filter((s) => s.gender === `Female` && s.averageGrade === 5)
                    .map((s) => `${s.firstName} ${s.lastName}`)
                console.log(allFemaleNamesWithAveragGrade5)

                let allMaleFullNamesSkopjeOver18Years = serverData
                    .filter((s) => s.gender === `Male` && s.city === `Skopje` && s.age > 18)
                    .map((s) => `${s.firstName} ${s.lastName}`);
                console.log(allMaleFullNamesSkopjeOver18Years)

                let averageGradesallFemaleStudentsOverAge24 = serverData
                    .filter((s) => s.gender === `Female` && s.age > 24)
                    .map((s) => s.averageGrade)
                console.log(averageGradesallFemaleStudentsOverAge24)

                let allMaleNameStartingWithBAverageGradeOver2 = serverData
                    .filter((s) => s.gender === `Male` && s.averageGrade > 2 && s.firstName[0] === `B`)
                console.log(allMaleNameStartingWithBAverageGradeOver2)
            })
    })


