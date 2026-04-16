import React from 'react';

const ContactInfoCard = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-5 p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
      <div className="p-3 bg-[#E6EBF4] dark:bg-slate-800 rounded-lg text-primary">
        {icon}
      </div>
      <div>
        <p className="text-md font-medium text-black dark:text-slate-400">{label}</p>
        <p className="text-base text-[#748292] dark:text-slate-200">{value}</p>
      </div>
    </div>
  );
};

export default ContactInfoCard;