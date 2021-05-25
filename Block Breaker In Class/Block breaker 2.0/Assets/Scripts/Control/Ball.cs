using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Ball : MonoBehaviour
{
    [SerializeField] Paddle paddle;
    [SerializeField] Vector2 ballVelocity;
    private bool hasLaunched = false;
    private Rigidbody2D rb;
    // Start is called before the first frame update
    void Start()
    { 
        rb = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        if (!hasLaunched) {
            if (Input.GetMouseButtonDown(0)) 
            {
                Debug.Log("Mouse clicked");
                hasLaunched = true;
                rb.velocity = ballVelocity;
            } 
            else 
            {
                Vector3 position = paddle.transform.position;
                transform.position = position;
            }
        }
    }
}
