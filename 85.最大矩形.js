var maximalRectangle = function(matrix) {
    let [n,m] = [matrix.length, matrix[0].length]

    let dp = Array.from({length: n+1}, ()=>
        Array.from({length: m+1}, ()=>
            new Array()
        )
    )

    let prefix_w = Array.from({length: n+1}, ()=>new Array(m+1).fill(0))
    let prefix_h = Array.from({length: n+1}, ()=>new Array(m+1).fill(0))
    let maximum=0

    for(let i=1;i<=n;i++){
        for(let j=1;j<=m;j++){
            if(matrix[i-1][j-1]=='1'){
                prefix_w[i][j]=(j>=1?prefix_w[i][j-1]:0)+1
                prefix_h[i][j]=(i>=1?prefix_h[i-1][j]:0)+1
            }
        }
    }
    
    for(let i=1; i<=n; i++){
        for(let j=1; j<=m; j++){
            if(matrix[i-1][j-1]=='1'){
                if(dp[i][j-1].length || dp[i-1][j].length){
                    if(dp[i][j-1].length){ // prolong from left
                        for(let [w0,h0] of dp[i][j-1]){
                            dp[i][j].push([w0+1, Math.min(h0, prefix_h[i][j])])
                        }
                    }
                    if(dp[i-1][j].length){ // prolong from upper
                        for(let [w0,h0] of dp[i-1][j]){
                            dp[i][j].push([Math.min(w0, prefix_w[i][j]), h0+1])
                        }
                    }
                }else{
                    dp[i][j].push([1,1])
                }
                
                // 剪枝
                let map=new Map()
                for(let [w,h] of dp[i][j]){
                    if(map.has(h)) map.set(h, Math.max(map.get(h), w))
                    else map.set(h, w)
                }
                let map1=new Map()
                for(let [h,w] of map.entries()){
                    if(map1.has(w)) map1.set(w, Math.max(map1.get(w), h))
                    else map1.set(w, h)
                }
                dp[i][j]=Array.from(map1.entries())

                for(let [w,h] of dp[i][j]){
                    let area=w*h
                    if(maximum<area) maximum=area
                }
            }
        }
    }
    
    return maximum
};