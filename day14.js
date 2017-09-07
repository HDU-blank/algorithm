function LastRemaining_Solution(n, m)
{
    if (n==0||m==0) return -1;
    var s = 0;
    for (i = 2; i <= n; i++)
     {
         s = (s + m) % i;
     }
    return s;
}

/*为了讨论方便，先把问题稍微改变一下，并不影响原意：
问题描述：n个人（编号0~(n-1))，从0开始报数，报到(m-1)的退出，剩下的人继续从0开始报数。
求胜利者的编号。

我们知道第一个人(编号一定是m%n-1) 出列之后，剩下的n-1个人组成了一个新的约瑟夫环（
以编号为k=m%n的人开始）:
k  k+1  k+2  ... n-2, n-1, 0, 1, 2, ... k-2并且从k开始报0。
现在我们把他们的编号做一下转换：

k     --> 0
k+1   --> 1
k+2   --> 2
...
...
k-2   --> n-2
k-1   --> n-1
变换后就完完全全成为了(n-1)个人报数的子问题，假如我们知道这个子问题的解：例如x是最终的胜利者，
那么根据上面这个表把这个x变回去不刚好就是n个人情况的解吗？！！变回去的公式很简单，相信大家都
可以推出来：x'=(x+k)%n

如何知道(n-1)个人报数的问题的解？对，只要知道(n-2)个人的解就行了。(n-2)个人的解呢？当然是
先求(n-3)的情况 ---- 这显然就是一个倒推问题！好了，思路出来了，下面写递推公式：
令f[i]表示i个人玩游戏报m退出最后胜利者的编号，最后的结果自然是f[n]
递推公式
f[1]=0;
f[i]=(f[i-1]+m)%i;  (i>1)   */