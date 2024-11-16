//find duplicate element in array
class Test{
  static int findDup(int arr[],int n){
    for(int i=0;i<n;i++){
      for(int j=i+1;j<n;j++){
        if(arr[i]==arr[j]){
          return arr[i];
        }
      }
      
    }
    
   return -1;
  }
  public static void main(String [] args){
    int []y={1,3,23,2};
    int res=findDup(y,y.length);
    System.out.println(res);
    
  }
}