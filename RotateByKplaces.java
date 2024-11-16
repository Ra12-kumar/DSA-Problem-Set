//rotate an array by k places
import java.util.Arrays;
class Test{
  static void reverse(int arr[],int start,int end){
    int left=start,right=end,temp;
    while(left < right){
      temp=arr[left];
      arr[left]=arr[right];
      arr[right]=temp;
      left++;
      right--;
    }
  }
  static void reverseByK(int arr[],int k,int n){
        reverse(arr,0,k-1);
        reverse(arr,k,n-1);
        reverse(arr,0,n-1);
    }
    public static void main(String [] args){
      int []y={1,2,5,6,8,9,7};
      int k=2;
      reverseByK(y,k,y.length);
      
        System.out.print(Arrays.toString(y));
      
    }
}