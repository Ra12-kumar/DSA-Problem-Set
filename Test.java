//find largest and smallest in a array
import java.util.*;
class Test{
  static int[] findLargest(int arr[],int n){
    int largest=arr[0];
    int smallest=arr[0];
    for(int i=0;i<n;i++){
      if(arr[i]>largest){
        largest=arr[i];
      }
      if(smallest>arr[i]){
        smallest=arr[i];
      }
    }
    return new int[]{largest,smallest};
  }
  public static void main(String [] args){
    int []y={1,2,3,4,56,8,5,85,5,6};
    int []res=findLargest(y,y.length);
    System.out.println(Arrays.toString(res));
  }
}