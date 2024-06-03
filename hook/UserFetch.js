import{ createClient } from '@supabase/supabase-js'   

const supabaseUrl = '' 
const supabaseKey = ''
export const supabase = createClient ( supabaseUrl , supabaseKey )

async function getUsers() {
    const response = await supabase
      .from('User')
      .select('name');
  
    const data = response.data;
    const error = response.error;
  
    if (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', data);
    } else {
      console.log('Utilisateurs:', data);
    }
  }
  
  getUsers();