// If the database is empty on server start, create a collection to store icon paths and data
Meteor.startup(function () {
  if (CategoryIcons.find().count() === 0) {
    var data = [
      {
        name: "None",
        image: 'Transparent.png'
      },
      {
        name: "Allergy_Vials",
        image: 'Allergy_Vials.png'
      },
      {
        name: "Ambulance",
        image: 'Ambulance.png'
      },
      {
        name: "Baby_Bottle",
        image: 'Baby_Bottle.png'
      },
      {
        name: "Baby_Carriage",
        image: 'Baby_Carriage.png'
      },
      {
        name: "Bacteria",
        image: 'Bacteria.png'
      },
      {
        name: "Band_Aid",
        image: 'Band_Aid.png'
      },
      {
        name: "Bandage_Roll",
        image: 'Bandage_Roll.png'
      },
      {
        name: "Blood_Bag",
        image: 'Blood_Bag.png'
      },
      {
        name: "Blood_Pressure",
        image: 'Blood_Pressure.png'
      },
      {
        name: "Brain",
        image: 'Brain.png'
      },
      {
        name: "Chemicals",
        image: 'Chemicals.png'
      },
      {
        name: "Conception",
        image: 'Conception.png'
      },
      {
        name: "CT_Scan",
        image: 'CT_Scan.png'
      },
      {
        name: "Dental_Chair",
        image: 'Dental_Chair.png'
      },
      {
        name: "Dentistry",
        image: 'Dentistry.png'
      },
      {
        name: "DNA",
        image: 'DNA.png'
      },
      {
        name: "Donar_List",
        image: 'Donar_List.png'
      },
      {
        name: "Drinking",
        image: 'Drinking.png'
      },
      {
        name: "Drinking_and_Smoking",
        image: 'Drinking_and_Smoking.png'
      },
      {
        name: "Ear",
        image: 'Ear.png'
      },
      {
        name: "EKG",
        image: 'EKG.png'
      },
      {
        name: "Emergency_Room",
        image: 'Emergency_Room.png'
      },
      {
        name: "Eye_Ball",
        image: 'Eye_Ball.png'
      },
      {
        name: "Eye_Chart",
        image: 'Eye_Chart.png'
      },
      {
        name: "First_Aid",
        image: 'First_Aid.png'
      },
      {
        name: "Group_Children",
        image: 'Group_Children.png'
      },
      {
        name: "Group_Doctors",
        image: 'Group_Doctors.png'
      },
      {
        name: "Group_Doctors_2",
        image: 'Group_Doctors_2.png'
      },
      {
        name: "Group_Medical_Team",
        image: 'Group_Medical_Team.png'
      },
      {
        name: "Group_Patients",
        image: 'Group_Patients.png'
      },
      {
        name: "Group_Surgical_Team",
        image: 'Group_Surgical_Team.png'
      },
      {
        name: "Health_Meter",
        image: 'Health_Meter.png'
      },
      {
        name: "Heart-Orange",
        image: 'Heart-Orange.png'
      },
      {
        name: "Heart",
        image: 'Heart.png'
      },
      {
        name: "Heart_Donor",
        image: 'Heart_Donor.png'
      },
      {
        name: "Herb_Mix",
        image: 'Herb_Mix.png'
      },
      {
        name: "Hospital",
        image: 'Hospital.png'
      },
      {
        name: "Hospital_Bed",
        image: 'Hospital_Bed.png'
      },
      {
        name: "Human_Anatomy",
        image: 'Human_Anatomy.png'
      },
      {
        name: "ID_Bracelet",
        image: 'ID_Bracelet.png'
      },
      {
        name: "Inhaler",
        image: 'Inhaler.png'
      },
      {
        name: "Injury",
        image: 'Injury.png'
      },
      {
        name: "Insurance_Plan",
        image: 'Insurance_Plan.png'
      },
      {
        name: "Intestine",
        image: 'Intestine.png'
      },
      {
        name: "IV_Bag",
        image: 'IV_Bag.png'
      },
      {
        name: "Labs",
        image: 'Labs.png'
      },
      {
        name: "Liver",
        image: 'Liver.png'
      },
      {
        name: "Medical_Bag",
        image: 'Medical_Bag.png'
      },
      {
        name: "Medical_Database",
        image: 'Medical_Database.png'
      },
      {
        name: "Medical_Insurance",
        image: 'Medical_Insurance.png'
      },
      {
        name: "Medical_Invoice",
        image: 'Medical_Invoice.png'
      },
      {
        name: "Medical_Knowledge_Base",
        image: 'Medical_Knowledge_Base.png'
      },
      {
        name: "Medical_Office",
        image: 'Medical_Office.png'
      },
      {
        name: "Medical_Report",
        image: 'Medical_Report.png'
      },
      {
        name: "Medical_Symbol",
        image: 'Medical_Symbol.png'
      },
      {
        name: "Medicine_and_Water",
        image: 'Medicine_and_Water.png'
      },
      {
        name: "Medicine_Liquid",
        image: 'Medicine_Liquid.png'
      },
      {
        name: "MRI",
        image: 'MRI.png'
      },
      {
        name: "Pager",
        image: 'Pager.png'
      },
      {
        name: "Pediatrics",
        image: 'Pediatrics.png'
      },
      {
        name: "Petri_Dish",
        image: 'Petri_Dish.png'
      },
      {
        name: "Pharmacy",
        image: 'Pharmacy.png'
      },
      {
        name: "Pill",
        image: 'Pill.png'
      },
      {
        name: "Pills",
        image: 'Pills.png'
      },
      {
        name: "Pills_Strip",
        image: 'Pills_Strip.png'
      },
      {
        name: "Poison",
        image: 'Poison.png'
      },
      {
        name: "Pregnant",
        image: 'Pregnant.png'
      },
      {
        name: "Prescription",
        image: 'Prescription.png'
      },
      {
        name: "Qualifications",
        image: 'Qualifications.png'
      },
      {
        name: "Safety_Glasses",
        image: 'Safety_Glasses.png'
      },
      {
        name: "Safety_Pin",
        image: 'Safety_Pin.png'
      },
      {
        name: "Sanitation",
        image: 'Sanitation.png'
      },
      {
        name: "Sanitation_Gloves",
        image: 'Sanitation_Gloves.png'
      },
      {
        name: "Scalpel",
        image: 'Scalpel.png'
      },
      {
        name: "Skin",
        image: 'Skin.png'
      },
      {
        name: "Skull",
        image: 'Skull.png'
      },
      {
        name: "Smoking",
        image: 'Smoking.png'
      },
      {
        name: "Sperm",
        image: 'Sperm.png'
      },
      {
        name: "Stethoscope",
        image: 'Stethoscope.png'
      },
      {
        name: "Symbol_Admitted",
        image: 'Symbol_Admitted.png'
      },
      {
        name: "Symbol_Air_Transport",
        image: 'Symbol_Air_Transport.png'
      },
      {
        name: "Symbol_Discharged",
        image: 'Symbol_Discharged.png'
      },
      {
        name: "Symbol_Female",
        image: 'Symbol_Female.png'
      },
      {
        name: "Symbol_Hospital",
        image: 'Symbol_Hospital.png'
      },
      {
        name: "Symbol_Male",
        image: 'Symbol_Male.png'
      },
      {
        name: "Symbol_Men",
        image: 'Symbol_Men.png'
      },
      {
        name: "Symbol_Restrooms",
        image: 'Symbol_Restrooms.png'
      },
      {
        name: "Symbol_Smoking_Prohibited",
        image: 'Symbol_Smoking_Prohibited.png'
      },
      {
        name: "Symbol_Transferred",
        image: 'Symbol_Transferred.png'
      },
      {
        name: "Symbol_Women",
        image: 'Symbol_Women.png'
      },
      {
        name: "Syringe_and_Vial",
        image: 'Syringe_and_Vial.png'
      },
      {
        name: "Toddler",
        image: 'Toddler.png'
      },
      {
        name: "Tooth",
        image: 'Tooth.png'
      },
      {
        name: "Transfusion",
        image: 'Transfusion.png'
      },
      {
        name: "Urine_Sample",
        image: 'Urine_Sample.png'
      },
      {
        name: "User_Baby_Boy",
        image: 'User_Baby_Boy.png'
      },
      {
        name: "User_Baby_Girl",
        image: 'User_Baby_Girl.png'
      },
      {
        name: "User_Deceased_Female",
        image: 'User_Deceased_Female.png'
      },
      {
        name: "User_Dentist",
        image: 'User_Dentist.png'
      },
      {
        name: "User_Doctor_Female",
        image: 'User_Doctor_Female.png'
      },
      {
        name: "User_Doctor_Female_2",
        image: 'User_Doctor_Female_2.png'
      },
      {
        name: "User_Doctor_Male",
        image: 'User_Doctor_Male.png'
      },
      {
        name: "User_Intensive_Care_Male",
        image: 'User_Intensive_Care_Male.png'
      },
      {
        name: "User_Intern_Female",
        image: 'User_Intern_Female.png'
      },
      {
        name: "User_Nurse_Army_Female",
        image: 'User_Nurse_Army_Female.png'
      },
      {
        name: "User_Nurse_Female",
        image: 'User_Nurse_Female.png'
      },
      {
        name: "User_Nurse_Female_2",
        image: 'User_Nurse_Female_2.png'
      },
      {
        name: "User_Patient_Female",
        image: 'User_Patient_Female.png'
      },
      {
        name: "User_Patient_Male",
        image: 'User_Patient_Male.png'
      },
      {
        name: "User_Surgeon_Male",
        image: 'User_Surgeon_Male.png'
      },
      {
        name: "Vial_and_Pills",
        image: 'Vial_and_Pills.png'
      },
      {
        name: "Virus",
        image: 'Virus.png'
      },
      {
        name: "Walker",
        image: 'Walker.png'
      },
      {
        name: "Water",
        image: 'Water.png'
      },
      {
        name: "Wheel_Chair",
        image: 'Wheel_Chair.png'
      },
      {
        name: "Xray",
        image: 'Xray.png'
      },
      {
        name: "Xray_Broken_Bone",
        image: 'Xray_Broken_Bone.png'
      },
      {
        name: "Xray_Mamography",
        image: 'Xray_Mamography.png'
      },
      {
        name: "Xray_Tooth",
        image: 'Xray_Tooth.png'
      },
      {
        name: "Zygote",
        image: 'Zygote.png'
      }

        ];

    for (var i = 0; i < data.length; i++) {
      CategoryIcons.insert({
        name: data[i].name,
        image: data[i].image
      });
    }
  }
});
