using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Ball : MonoBehaviour
{
    [SerializeField] Paddle paddle;
    private bool hasLaunched = false;
    // Start is called before the first frame update
    void Start()
    { 

    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetMouseButtonDown(0)) 
        {
            hasLaunched = true;
        } 
        else 
        {
            Vector3 position = paddle.transform.position;
            transform.position = position;
        }
    }
}
