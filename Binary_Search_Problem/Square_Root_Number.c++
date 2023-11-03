// x: element to find square root
class Solution{
  public:
    long long int floorSqrt(long long int x) 
    {
       if(x==0 || x==1){
           return x;
       }
       long long int start=1,end=x,ans=-1;
       while(start<=end){
         long long int mid=start+(end-start)/2;
           long long int sqrt=mid*mid;
           if(sqrt==x){
               return mid;
           }
           else if(sqrt<=x){
              ans=mid;
              start=mid+1;
              
           }
           else{
              end= mid-1;
           }
       }
       return ans;
    }
};
