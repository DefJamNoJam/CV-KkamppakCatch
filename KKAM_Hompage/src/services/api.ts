import { supabase } from './supabaseClient';

export interface UserData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface StoreData {
  name: string;
  address: string;
  order: string;
}

// 사용자 및 점포 등록 함수
export const registerUserAndStores = async (
    userData: UserData,
    stores: StoreData[]
  ) => {
    try {
      // 1) 사용자 등록 → 기본값으로 모든 컬럼을 반환
      const { data: userRows } = await supabase
        .from('user')
        .insert([{
          name: userData.name,
          email: userData.email,
          password: await hashPassword(userData.password),
          phone: userData.phone,
        }])
        .select('uid')
        .single();

      if(!userRows){
        return;
      }
      const validStores = stores.filter(s => s.name && s.address);
      if (validStores.length > 0) {
        const storeInserts = validStores.map(s => ({
          uid:     userRows.uid,
          store_nm: s.name,
          sn:      s.order ? parseInt(s.order, 10) : 0,
          address: s.address,
        }));
        const { error: storeError } = await supabase
          .from('store')
          .insert(storeInserts);
        if (storeError) throw storeError;
      }
  
      return { success: true };
    } catch (error) {
      console.error('등록 오류:', error);
      throw error;
    }
  };  

export const hashPassword = async (password: string): Promise<string> => {
  return password;
};