import Job from "./Job";
const Jobs = () => {
   return (
      <>
         <div className="container">
            <div className="cadre1">
               <div className="wrap">
                  <Job
                     className="cadre red"
                     title="Full Time Sales Associate - Sydney Boutique"
                     contractType="CDI"
                     country="Australie"
                     city="Sydney"
                  />
                  <Job
                     className="cadre green"
                     title="Agent de sécurité - Pantin"
                     contractType="CDI"
                     country="France"
                     city="Pantin"
                  />
                  <Job
                     className="cadre yellow"
                     title="Responsable d'Atelier (H/F)"
                     contractType="CDD"
                     country="France"
                     city="Paris"
                  />
                  <Job
                     className="cadre blue"
                     title="Chef de Projets"
                     contractType="CDD"
                     country="France"
                     city="Paris"
                  />
                  <Job
                     className="cadre pink"
                     title="Développeur React.js"
                     contractType="CDI"
                     country="France"
                     city="Paris"
                  />
                  <Job
                     className="cadre red"
                     title="Sales Associate Stockholm"
                     contractType="CDI"
                     country="Suède"
                     city="Stockholm"
                  />
                  <Job
                     className="cadre green"
                     title="Vendeur/se - Crans Montana"
                     contractType="CDI"
                     country="Suisse"
                     city="Crans-Montana"
                  />
                  <Job
                     className="cadre yellow"
                     title="CRM & Data Quality Analyst"
                     contractType="CDI"
                     country="USA"
                     city="New York"
                  />
                  <Job
                     className="cadre blue"
                     title="Infirmier(H/F)"
                     contractType="CDI"
                     country="France"
                     city="Pantin"
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default Jobs;
