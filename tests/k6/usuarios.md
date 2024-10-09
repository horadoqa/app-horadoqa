# USUARIOS

## O teste de USUARIOS com k6 sem cache

O endpoint http://localhost/usuarios atendeu:

- 7.753 requests/seg com 955.04µs tempo de resposta

    ✓ status was 200

     checks.........................: 100.00% 1132868 out of 1132868
     data_received..................: 892 MB  5.9 MB/s
     data_sent......................: 94 MB   627 kB/s
     http_req_blocked...............: avg=4.69µs   min=1.2µs      med=3.3µs    max=5.57ms  p(90)=4.5µs    p(95)=5.5µs   
     http_req_connecting............: avg=186ns    min=0s         med=0s       max=2.74ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=955.04µs min=-834777ns  med=796.64µs max=58.68ms p(90)=1.53ms   p(95)=1.93ms  
       { expected_response:true }...: avg=955.04µs min=-834777ns  med=796.64µs max=58.68ms p(90)=1.53ms   p(95)=1.93ms  
     http_req_failed................: 0.00%   0 out of 1132868
     http_req_receiving.............: avg=81.86µs  min=-2451413ns med=35.4µs   max=20.64ms p(90)=156.11µs p(95)=332.64µs
     http_req_sending...............: avg=13.08µs  min=-2351911ns med=9.4µs    max=9.94ms  p(90)=14.09µs  p(95)=27.2µs  
     http_req_tls_handshaking.......: avg=0s       min=0s         med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=860.09µs min=0s         med=715.02µs max=58.62ms p(90)=1.39ms   p(95)=1.76ms  
     http_reqs......................: 1132868 7553.032761/s
     iteration_duration.............: avg=1.05ms   min=227.52µs   med=896.23µs max=58.78ms p(90)=1.66ms   p(95)=2.07ms  
     iterations.....................: 1132868 7553.032761/s
     vus............................: 1       min=1                  max=10
     vus_max........................: 10      min=10                 max=10



## O teste de USUARIOS com k6 com cache

O endpoint http://localhost/usuarios atendeu:

- 6.542 requests/seg com 1.1ms tempo de resposta

  ✓ status was 200

     checks.........................: 100.00% 981317 out of 981317
     data_received..................: 772 MB  5.1 MB/s
     data_sent......................: 81 MB   543 kB/s
     http_req_blocked...............: avg=5.29µs  min=1.2µs      med=3.7µs    max=12.1ms  p(90)=5.1µs    p(95)=6.2µs   
     http_req_connecting............: avg=216ns   min=0s         med=0s       max=3.34ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.1ms   min=-1481835ns med=909.47µs max=75.69ms p(90)=1.79ms   p(95)=2.28ms  
       { expected_response:true }...: avg=1.1ms   min=-1481835ns med=909.47µs max=75.69ms p(90)=1.79ms   p(95)=2.28ms  
     http_req_failed................: 0.00%   0 out of 981317
     http_req_receiving.............: avg=92.32µs min=-2281300ns med=39µs     max=38.93ms p(90)=173.01µs p(95)=377.43µs
     http_req_sending...............: avg=14.53µs min=-1987233ns med=10.3µs   max=10.39ms p(90)=15.7µs   p(95)=30.2µs  
     http_req_tls_handshaking.......: avg=0s      min=0s         med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1ms     min=0s         med=817.06µs max=75.64ms p(90)=1.63ms   p(95)=2.08ms  
     http_reqs......................: 981317  6542.606277/s
     iteration_duration.............: avg=1.22ms  min=235.71µs   med=1.02ms   max=75.79ms p(90)=1.94ms   p(95)=2.44ms  
     iterations.....................: 981317  6542.606277/s
     vus............................: 1       min=1                max=10
     vus_max........................: 10      min=10               max=10