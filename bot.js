var msgs = [];
lastmsg = "", botmsg = "";
function sendmsg() {
    let msg = document.querySelector(".input").value;
    function botans(word) {
        let div = document.createElement('div');
        div.innerHTML = '<div class="card col-10"><br><span class="txt">' + word + '</span></div>';
        setTimeout(function () {
            document.querySelector(".chat").appendChild(div);
        }, 500)
    }
    function usermsg(msg) {

        let div = document.createElement('div');
        if(msg!=""){
        div.innerHTML = `<div class="usermsg col-10"><br>${msg}<br></div>`;


        document.querySelector(".chat").appendChild(div);
}

    } usermsg(msg);
    if (msg == "") {
        botans("Hey!I cant see your question");

    } else if((msg.toLowerCase().indexOf("hi") >= 0)||(msg.toLowerCase().indexOf("hey") >= 0)||(msg.toLowerCase().indexOf("hello") >= 0)){
        botans("Hi! My name is Sue. How can i be of help?")
    }
    else if ((msg.toLowerCase().indexOf("what is coronavirus") >= 0) || (msg.toLowerCase().indexOf("what causes covid-19") >= 0)||(msg.toLowerCase().indexOf("what is a coronavirus") >= 0)) {
        botans("Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.");
    } else if ((msg.toLowerCase().indexOf("what is covid-19") >= 0) || (msg.toLowerCase().indexOf("when was covid-19") >= 0)) {
        botans("COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019. ");
    } else if ((msg.toLowerCase().indexOf("symptoms of covid-19") >= 0) || (msg.toLowerCase().indexOf("symptoms of covid-19") >= 0) || (msg.toLowerCase().indexOf("covid-19 symptoms") >= 0) || (msg.toLowerCase().indexOf("how do i know if i have covid-19") >= 0) || (msg.toLowerCase().indexOf("how do i know if i have coronavirus") >= 0)) {
        botans("The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but don’t develop any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and difficulty breathing should seek medical attention.");

    } else if ((msg.toLowerCase().indexOf("how can i catch covid-19") >= 0) || (msg.toLowerCase().indexOf("transmission of covid-19") >= 0) || (msg.toLowerCase().indexOf("How can i catch coronavirus") >= 0) || (msg.toLowerCase().indexOf("transmission of coronavirus") >= 0) || (msg.toLowerCase().indexOf("can the virus that causes covid-19 be transmitted through the air?") >= 0)) {
        botans("You can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch COVID-19 if they breathe in droplets from a person with COVID-19 who coughs out or exhales droplets. This is why it is important to stay more than 1 meter (3 feet) away from a person who is sick. ");
    } else if ((msg.toLowerCase().indexOf("source of virus causing covid-19 known") >= 0)) {
        botans("Currently, the source of SARS-CoV-2, the coronavirus (CoV) causing COVID-19 is unknown. All available evidence suggests that SARS-CoV-2 has a natural animal origin and is not a constructed virus. SARS-CoV-2 virus most probably has its ecological reservoir in bats. SARS-CoV-2, belongs to a group of genetically related viruses, which also include SARS-CoV and a number of other CoVs isolated from bats populations. MERS-CoV also belongs to this group, but is less closely related.")
    } else if ((msg.toLowerCase().indexOf("can covid-19 be cured") >= 0)||(msg.toLowerCase().indexOf("cure for covid-19") >= 0) || (msg.toLowerCase().indexOf("covid-19 cure") >= 0) || (msg.toLowerCase().indexOf("source of virus causing covid-19 known") >= 0) || (msg.toLowerCase().indexOf("does coronavirus have a cure") >= 0)||(msg.toLowerCase().indexOf("treatment of covid-19") >= 0)||(msg.toLowerCase().indexOf("can covid-19 be treated") >= 0)||(msg.toLowerCase().indexOf("does covid-19 have a cure") >= 0)) {
        botans("Well,up to date, there is no vaccine and no specific antiviral medicine to prevent or treat COVID-2019. However, those affected should receive care to relieve symptoms. People with serious illness should be hospitalized. Most patients recover thanks to supportive care. ")
    } else if ((msg.toLowerCase().indexOf("can i smoke") >= 0)) {
        botans("Smoking can be harfmul whether you have it or not")
    } else if ((msg.toLowerCase().indexOf("last on surfaces") >= 0)) {
        botans('It is not certain how long the virus that causes COVID-19 survives on surfaces, but it seems to behave like other coronaviruses. Studies suggest that coronaviruses (including preliminary information on the COVID-19 virus) may persist on surfaces for a few hours or up to several days. This may vary under different conditions (e.g. type of surface, temperature or humidity of the environment)')
    } else if ((msg.toLowerCase().indexOf("death rate") >= 0) || (msg.toLowerCase().indexOf("mortality rate") >= 0) || (msg.toLowerCase().indexOf("fatality rate") >= 0)) {
        botans('It is probably about or a bit less than 1%. The rate appears to be as high as 4% from globally confirmed case figures, but it is likely that many mild cases are going undetected. However a 1% mortality rate would still make Covid-19 about 10 times more deadly than seasonal flu, which is estimated to kill between 290,000 and 650,000 people a year globally. The death rate also increases significantly for people over 60.')
    } else if ((msg.toLowerCase().indexOf("covid-19 from pets") >= 0)) {
        botans("Well,there is no evidence that a dog, cat or any pet can transmit COVID-19. COVID-19 is mainly spread through droplets produced when an infected person coughs, sneezes, or speaks. To protect yourself, clean your hands frequently and thoroughly. ")
    } else if ((msg.toLowerCase().indexOf("protect myself from") >= 0)||(msg.toLowerCase().indexOf("protection from") >= 0)) {
        botans("You can reduce your chances of being infected or spreading COVID-19 by taking some simple precautions:   \nRegularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands. Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing. Why? When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease. Avoid touching eyes, nose and mouth.Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.Why? Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19.  Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority. Why? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections. Keep up to date on the latest COVID-19 hotspots (cities or local areas where COVID-19 is spreading widely). If possible, avoid traveling to places  – especially if you are an older person or have diabetes, heart or lung disease.        Why? You have a higher chance of catching COVID-19 in one of these areas.")
    } else if ((msg.toLowerCase().indexOf("at risk") >= 0) || (msg.toLowerCase().indexOf("how am i likely to catch covid-19") >= 0)||(msg.toLowerCase().indexOf("likely to catch covid-19") >= 0)) {
        botans("The risk depends on where you are and more specifically, whether there is a COVID-19 outbreak unfolding there.For most people in most locations the risk of catching COVID-19 is still low. However, there are now places around the world (cities or areas) where the disease is spreading. For people living in, or visiting, these areas the risk of catching COVID-19 is higher. Governments and health authorities are taking vigorous action every time a new case of COVID-19 is identified. Be sure to comply with any local restrictions on travel, movement or large gatherings. Cooperating with disease control efforts will reduce your risk of catching or spreading COVID-19. COVID-19 outbreaks can be contained and transmission stopped, as has been shown in China and some other countries. Unfortunately, new outbreaks can emerge rapidly. It’s important to be aware of the situation where you are or intend to go. WHO publishes daily updates on the COVID-19 situation worldwide. While we are still learning about how COVID-2019 affects people, older persons and persons with pre-existing medical conditions (such as high blood pressure, heart disease, lung disease, cancer or diabetes)  appear to develop serious illness more often than others.")
    } else if ((msg.toLowerCase().indexOf("incubation period for covid-19") >= 0)) {
        botans("The “incubation period” means the time between catching the virus and beginning to have symptoms of the disease. Most estimates of the incubation period for COVID-19 range from 1-14 days, most commonly around five days. These estimates will be updated as more data become available.")
    } else if ((msg.toLowerCase().indexOf("covid-19 the same as sars") >= 0)) {
        botans("No. The virus that causes COVID-19 and the one that caused the outbreak of Severe Acute Respiratory Syndrome (SARS) in 2003 are related to each other genetically, but the diseases they cause are quite different. SARS was more deadly but much less infectious than COVID-19. There have been no outbreaks of SARS anywhere in the world since 2003")
    } else if ((msg.toLowerCase().indexOf("survival rate") >= 0)) {
        botans("Not known yet.");
    } else if ((msg.toLowerCase().indexOf("pregnant protect themselves from covid-19") >= 0) || (msg.toLowerCase().indexOf("pregnant save from Coronavirus") >= 0)) {
        botans("Pregnant women are to take the same precautions to avoid COVID-19 infection as other people.")
    } else if ((msg.toLowerCase().indexOf("breastfeed baby") >= 0)) {
        botans("Yes. Women with COVID-19 can breastfeed if they wish to do so. they must However take the same precautions as the infected")
    } else if ((msg.toLowerCase().indexOf("pregnant women at higher risk") >= 0)) {
        botans("Research is currently underway to understand the impacts of COVID 19 infection on pregnant women. Data are limited, but at present there is no evidence that they are at higher risk of severe illness than the general population.However, due to changes in their bodies and immune systems, we know that pregnant women can be badly affected by some respiratory infections. It is therefore important that they take precautions to protect themselves against COVID-19, and report possible symptoms (including fever, cough or difficulty breathing) to their healthcare provider.")
    } else if ((msg.toLowerCase().indexOf("passed from newborn baby") >= 0)) {
        botans("Well,it is not yet known know if a pregnant woman with COVID-19 can pass the virus to her foetus or baby during pregnancy or delivery. To date, the virus has not been found in samples of amniotic fluid or breastmilk.")
    }else if((msg.toLowerCase().indexOf("infected with coronavirus through touching surfaces") >= 0)){
botans("Chances of getting coronavirus through touching objects are very small")
    }else if((msg.toLowerCase().indexOf("can a mask protect me") >= 0)){
botans("To some extent, yes, but not completely. Masks are effective at capturing droplets, a main transmission route of coronavirus. If you are likely to be in close contact with someone infected, a mask cuts the chance of the disease being passed on. If you’re showing symptoms of coronavirus or have been diagnosed, wearing a mask can also protect others. However, masks will probably make little difference if you’re just walking around town, and are no guarantee of protection. Medical staff working with Covid-19 patients have been catching the virus despite all the protective equipment they have at their disposal.")
    }else if((msg.toLowerCase().indexOf("what happens when you have covid-19") >= 0)){
botans("The cough and fever is a result of the infection reaching the air passages that conduct air between the lungs and the outside. The lining of the air passages become injured, causing inflammation. The inflammation can spread throughout the lungs, causing them to fill with liquid, making breathing difficult. The lungs are then unable to get enough oxygen to the bloodstream, which can cause death.")
    }else if((msg.toLowerCase().indexOf("other coronaviruses") >= 0)){
botans("Yes. Severe acute respiratory syndrome (Sars) and Middle Eastern respiratory syndrome (Mers) were both caused by coronaviruses that made the leap from animals to humans. In 2002, Sars spread virtually unchecked to 37 countries, causing global panic, infecting more than 8,000 people and killing more than 750.")
    }else if((msg.toLowerCase().indexOf("covid-19 and childre") >= 0)){
botans("Reassuringly for parents, the disease has generally been milder in children, though they can spread it without displaying any symptoms. There are many unknowns, and research is continuing.")
    }
    else {
        botans("I'm not sure of what you're asking me to do. Ask me questions only relating to covid-19");
    }

}