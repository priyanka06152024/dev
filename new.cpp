#include<iostream>
#include<vector>
using namespace std;
int main(){
    vector<int> vec = {1,2,3,4,5};
    int n = vec.size();
    for(int i=0;i<n;i++){
     cout<<"vector:- "<<2*vec[i];
     cout<<"hello";
    }
}