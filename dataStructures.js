�A�r�r�a�y�.�p�r�o�t�o�t�y�p�e�.�c�l�o�n�e� �=� �f�u�n�c�t�i�o�n�(�)� �{� �r�e�t�u�r�n� �t�h�i�s�.�s�l�i�c�e�(�0�)�;� �}�
�
�A�r�r�a�y�.�p�r�o�t�o�t�y�p�e�.�c�o�u�n�t� �=� �f�u�n�c�t�i�o�n�(�)� �{� �r�e�t�u�r�n� �t�h�i�s�.�l�e�n�g�t�h�;� �}�
�
�A�r�r�a�y�.�p�r�o�t�o�t�y�p�e�.�i�s�E�m�p�t�y� �=� �f�u�n�c�t�i�o�n�(�)� �{� �r�e�t�u�r�n� �(�0� �=�=�=� �t�h�i�s�.�l�e�n�g�t�h�)�;� �}�
�
�A�r�r�a�y�.�p�r�o�t�o�t�y�p�e�.�i�n�A�r�r�a�y� �=� �f�u�n�c�t�i�o�n�(�e�)� �{� �f�o�r� �(�v�a�r� �i� �i�n� �t�h�i�s�)�{�i�f� �(�t�h�i�s�[�i�]�=�=�=�e�)� �r�e�t�u�r�n� �t�r�u�e�;�}� �r�e�t�u�r�n� �f�a�l�s�e�;� �}�
�
�
�
�v�a�r� �E�n�u�m�e�r�a�t�i�o�n� �=� �C�l�a�s�s�.�e�x�t�e�n�d�(�{�
�
�	�_�e�l�e�m�e�n�t�s�:� �n�u�l�l�,�
�
�	�_�c�u�r�r�e�n�t�:� �n�u�l�l�,�
�
�	�
�
�	�i�n�i�t�:� �f�u�n�c�t�i�o�n�(�i�t�e�r�a�t�a�b�l�e�O�b�j�e�c�t�)� �{�
�
�	�	�i�f� �(�!�i�t�e�r�a�t�a�b�l�e�O�b�j�e�c�t� �i�n�s�t�a�n�c�e�o�f� �I�t�e�r�a�t�a�b�l�e�)� �{�
�
�	�	�	�t�h�r�o�w� �n�e�w� �E�r�r�o�r�(�'�V�a�l�u�e� �m�u�s�t� �b�e� �a�n� �i�n�s�t�a�n�c�e� �o�f� �I�t�e�r�a�t�a�b�l�e�'�)�;�
�
�	�	�}�
�
�	�	�
�
�	�	�t�h�i�s�.�_�c�u�r�r�e�n�t� �=� �0�;�
�
�	�	�t�h�i�s�.�_�e�l�e�m�e�n�t�s� �=� �i�t�e�r�a�t�a�b�l�e�O�b�j�e�c�t�.�t�o�A�r�r�a�y�(�)�.�c�l�o�n�e�(�)�;�
�
�	�}�,�
�
�	�
�
�	�h�a�s�N�e�x�t�:� �f�u�n�c�t�i�o�n�(�)� �{�
�
�	�	�r�e�t�u�r�n� �(�t�h�i�s�.�_�c�u�r�r�e�n�t� �<� �t�h�i�s�.�_�e�l�e�m�e�n�t�s�.�c�o�u�n�t�(�)�)�;�
�
�	�}�,�
�
�	�
�
�	�n�e�x�t�:� �f�u�n�c�t�i�o�n�(�)� �{�
�
�	�	�v�a�r� �i�t�e�m� �=� �(�u�n�d�e�f�i�n�e�d� �=�=�=� �t�h�i�s�.�_�e�l�e�m�e�n�t�s�[�t�h�i�s�.�_�c�u�r�r�e�n�t�]�)� �
�
�	�	�	�?� �n�u�l�l�
�
�	�	�	�:� �t�h�i�s�.�_�e�l�e�m�e�n�t�s�[�t�h�i�s�.�_�c�u�r�r�e�n�t�]�;�
�
�	�	�	�
�
�	�	�t�h�i�s�.�_�c�u�r�r�e�n�t�+�+�;�
�
�	�	�r�e�t�u�r�n� �i�t�e�m�;�
�
�	�}�	�
�
�}�)�;�
�
�
�
�v�a�r� �I�t�e�r�a�t�o�r� �=� �E�n�u�m�e�r�a�t�i�o�n�.�e�x�t�e�n�d�(�{�
�
�	�r�e�m�o�v�e�:� �f�u�n�c�t�i�o�n�(�)� �{�
�
�	�	�t�h�i�s�.�_�e�l�e�m�e�n�t�s�
�
�	�	�	�=� �t�h�i�s�.�_�e�l�e�m�e�n�t�s�.�s�p�l�i�c�e�(�t�h�i�s�.�_�c�u�r�r�e�n�t�-�1�,� �1�)�;�	�	�
�
�	�	�r�e�t�u�r�n� �t�h�i�s�;�
�
�	�}�
�
�}�)�;�
�
�
�
�v�a�r� �I�t�e�r�a�t�a�b�l�e� �=� �C�l�a�s�s�.�e�x�t�e�n�d�(�{�
�
�	�t�o�A�r�r�a�y�:� �f�u�n�c�t�i�o�n�(�)� �{�
�
�	�	�t�h�r�o�w� �n�e�w� �E�r�r�o�r�(�'�I�m�p�l�e�m�e�n�t� �t�o�A�r�r�a�y� �m�e�t�h�o�d�'�)�;�
�
�	�}�,�
�
�	�g�e�t�I�t�e�r�a�t�o�r�:� �f�u�n�c�t�i�o�n�(�)� �{�
�
�	�	�t�h�r�o�w� �n�e�w� �E�r�r�o�r�(�'�I�m�p�l�e�m�e�n�t� �g�e�t�I�t�e�r�a�t�o�r� �m�e�t�h�o�d�'�)�;�
�
�	�}�
�
�}�)�;�
�
�
�
�v�a�r� �S�t�a�c�k� �=� �C�l�a�s�s�.�e�x�t�e�n�d�(�{�
�
�	�_�a�r�r�a�y�:� �n�u�l�l�,�
�
�
�
�	�i�n�i�t�:� �f�u�n�c�t�i�o�n�(�)� �{�
�
�	�	�t�h�i�s�.�_�a�r�r�a�y� �=� �n�e�w� �A�r�r�a�y�(�)�;�
�
�	�}�,�
�
�	�
�
�	�i�s�E�m�p�t�y�:� �f�u�n�c�t�i�o�n�(�)� �{�
�
�	�	�r�e�t�u�r�n� �t�h�i�s�.�_�a�r�r�a�y�.�i�s�E�m�p�t�y�(�)�;�
�
�	�}�,�
�
�	�
�
�	�p�e�e�k�:� �f�u�n�c�t�i�o�n�(�)� �{�
�
�	�	�r�e�t�u�r�n� �(�t�h�i�s�.�e�m�p�t�y�(�)�)�
�
�	�	�	�?� �n�u�l�l�
�
�	�	�	�:� �t�h�i�s�.�_�a�r�r�a�y�[�t�h�i�s�.�_�a�r�r�a�y�.�c�o�u�n�t�(�)� �-� �1�]�;�
�
�	�}�,�
�
�	�
�
�	�p�o�p�:� �f�u�n�c�t�i�o�n�(�)� �{�
�
�	�	�v�a�r� �v�a�l�u�e� �=� �t�h�i�s�.�p�e�e�k�(�)�;�
�
�	�	�
�
�	�	�i�f� �(�n�u�l�l� �!�=�=� �v�a�l�u�e�)� �{�
�
�	�	�	�t�h�i�s�.�_�a�r�r�a�y� �=� �
�
�	�	�	�	�t�h�i�s�.�_�a�r�r�a�y�.�s�p�l�i�c�e�(�0�,� �t�h�i�s�.�_�a�r�r�a�y�.�c�o�u�n�t�(�)�-�1�)�;�
�
�	�	�}�
�
�	�	�
�
�	�	�r�e�t�u�r�n� �v�a�l�u�e�;�
�
�	�}�,�
�
�	�
�
�	�p�u�s�h�:� �f�u�n�c�t�i�o�n�(�v�a�l�u�e�)� �{�
�
�	�	�i�f� �(�u�n�d�e�f�i�n�e�d� �=�=�=� �v�a�l�u�e�)� �{�
�
�	�	�	�t�h�r�o�w� �n�e�w� �E�r�r�o�r�(�'�V�a�l�u�e� �p�a�r�a�m�e�t�e�r� �e�x�c�e�p�t�e�d�!�'�)�;�
�
�	�	�}�
�
�	�	�
�
�	�	�t�h�i�s�.�_�a�r�r�a�y�.�p�u�s�h�(�v�a�l�u�e�)�;�
�
�	�	�r�e�t�u�r�n� �t�h�i�s�;�
�
�	�}�,�
�
�	�
�
�	�s�e�a�r�c�h�:� �f�u�n�c�t�i�o�n�(�v�a�l�u�e�)� �{�
�
�	�	�i�f� �(�u�n�d�e�f�i�n�e�d� �=�=�=� �v�a�l�u�e�)� �{�
�
�	�	�	�t�h�r�o�w� �n�e�w� �E�r�r�o�r�(�'�V�a�l�u�e� �p�a�r�a�m�e�t�e�r� �e�x�c�e�p�t�e�d�!�'�)�;�
�
�	�	�}�
�
�	�	�
�
�	�	�f�o�r� �(�v�a�r� �i� �i�n� �t�h�i�s�.�_�a�r�r�a�y�)� �{�
�
�	�	�	�i�f� �(�t�h�i�s�.�_�a�r�r�a�y�[�i�]� �=�=�=� �v�a�l�u�e�)� �{�
�
�	�	�	�	�r�e�t�u�r�n� �(�t�h�i�s�.�_�a�r�r�a�y�.�c�o�u�n�t�(�)�-�i�)� �-� �1�;� � �
�
�	�	�	�}�
�
�	�	�}�
�
�	�	�
�
�	�	�r�e�t�u�r�n� �-�1�;�
�
�	�}�,�
�
�	�
�
�	�t�o�S�t�r�i�n�g�:� �f�u�n�c�t�i�o�n�(�)� �{�
�
�	�	�r�e�t�u�r�n� �t�h�i�s�.�_�a�r�r�a�y�.�j�o�i�n�(�'�,�'�)�;�
�
�	�}�
�
�}�)�;�
�
�
�
�/�*�*�
�
�*� �N�O�T� �T�E�S�T�E�D�
�
�*�/�
�
�v�a�r� �C�o�l�l�e�c�t�i�o�n� �=� �I�t�e�r�a�t�a�b�l�e�.�e�x�t�e�n�d�(�{�
�
�	�_�a�r�r�a�y�:� �n�u�l�l�,�
�
�	�
�
�	�i�n�i�t�:� �f�u�n�c�t�i�o�n�(�)� �{�
�
�	�	�t�h�i�s�.�c�l�e�a�r�(�)�;�	�	�	�	�
�
�	�}�,�
�
�	�
�
�	�t�o�A�r�r�a�y�:� �f�u�n�c�t�i�o�n�(�)� �{�
�
�	�	�r�e�t�u�r�n� �t�h�i�s�.�_�a�r�r�a�y�;�	�	�
�
�	�}�,�
�
�	�
�
�	�g�e�t�I�t�e�r�a�t�o�r�:� �f�u�n�c�t�i�o�n�(�)� �{�
�
�	�	�r�e�t�u�r�n� �n�e�w� �I�t�e�r�a�t�o�r�(�t�h�i�s�)�;�	�	�	�
�
�	�}�,�
�
�	�
�
�	�c�l�e�a�r�:� �f�u�n�c�t�i�o�n�(�)� �{�
�
�	�	�t�h�i�s�.�_�a�r�r�a�y� �=� �n�e�w� �A�r�r�a�y�(�)�;�
�
�	�	�r�e�t�u�r�n� �t�h�i�s�;�
�
�	�}�,�
�
�	�
�
�	�i�s�E�m�p�t�y�:� �f�u�n�c�t�i�o�n�(�)� �{�
�
�	�	�r�e�t�u�r�n� �t�h�i�s�.�_�a�r�r�a�y�.�i�s�E�m�p�t�y�(�)�;�	�	�
�
�	�}�,�
�
�	�
�
�	�c�o�n�t�a�i�n�s�:� �f�u�n�c�t�i�o�n�(�v�a�l�u�e�)� �{�
�
�	�	�r�e�t�u�r�n� �t�h�i�s�.�_�a�r�r�a�y�.�i�n�A�r�r�a�y�(�v�a�l�u�e�)�;�
�
�	�}�,�
�
�	�
�
�	�c�o�n�t�a�i�n�s�A�l�l�:� �f�u�n�c�t�i�o�n�(�v�a�l�u�e�)� �{�
�
�	�	�i�f� �(�!�(�v�a�l�u�e� �i�n�s�t�a�n�c�e�o�f� �C�o�l�l�e�c�t�i�o�n�)�)� �{�
�
�	�	�	�t�h�r�o�w� �n�e�w� �E�r�r�o�r�(�'�V�a�l�u�e� �m�u�s�t� �b�e� �a�n� �i�n�s�t�a�n�c�e� �o�f� �C�o�l�l�e�c�t�i�o�n�'�)�;�
�
�	�	�}�
�
�	�	�
�
�	�	�v�a�r� �r�e�s�u�l�t� �=� �f�a�l�s�e�;�
�
�	�	�
�
�	�	�w�h�i�l�e�(�v�a�l�u�e�.�h�a�s�N�e�x�t�(�)�)� �{�
�
�	�	�	�r�e�s�u�l�t� �=� �t�h�i�s�.�c�o�n�t�a�i�n�s�(�v�a�l�u�e�.�n�e�x�t�(�)�)�;�
�
�	�	�}�
�
�	�	�
�
�	�	�r�e�t�u�r�n� �r�e�s�u�l�t�;�
�
�	�}�,�
�
�	�
�
�	�r�e�m�o�v�e�:� �f�u�n�c�t�i�o�n�(�e�l�e�m�e�n�t�)� �{�
�
�	�	�f�o�r� �(�v�a�r� �i� �i�n� �t�h�i�s�.�_�a�r�r�a�y�)� �{�
�
�	�	�	�i�f� �(�e�l�e�m�e�n�t� �=�=�=� �t�h�i�s�.�_�a�r�r�a�y�[�i�]�)� �{�
�
�	�	�	�	�t�h�i�s�.�_�a�r�r�a�y� �=� �t�h�i�s�.�_�a�r�r�a�y�.�s�p�l�i�c�e�(�i�,� �1�)�;�
�
�	�	�	�	�r�e�t�u�r�n� �t�r�u�e�;�
�
�	�	�	�}�
�
�	�	�}�
�
�	�	�
�
�	�	�r�e�t�u�r�n� �f�a�l�s�e�;�
�
�	�}�,�
�
�	�
�
�	�r�e�m�o�v�e�A�l�l�:� �f�u�n�c�t�i�o�n�(�v�a�l�u�e�)� �{�
�
�	�	�i�f� �(�!�(�v�a�l�u�e� �i�n�s�t�a�n�c�e�o�f� �C�o�l�l�e�c�t�i�o�n�)�)� �{�
�
�	�	�	�t�h�r�o�w� �n�e�w� �E�r�r�o�r�(�'�V�a�l�u�e� �m�u�s�t� �b�e� �a�n� �i�n�s�t�a�n�c�e� �o�f� �C�o�l�l�e�c�t�i�o�n�'�)�;�
�
�	�	�}�
�
�	�	�
�
�	�	�v�a�r� �r�e�s�u�l�t� �=� �f�a�l�s�e�;�
�
�	�	�
�
�	�	�w�h�i�l�e�(�v�a�l�u�e�.�h�a�s�N�e�x�t�(�)�)� �{�
�
�	�	�	�r�e�s�u�l�t� �=� �t�h�i�s�.�r�e�m�o�v�e�(�v�a�l�u�e�.�n�e�x�t�(�)�)�;�
�
�	�	�}�
�
�	�	�
�
�	�	�r�e�t�u�r�n� �r�e�s�u�l�t�;� �
�
�	�}�,�
�
�	�
�
�	�s�i�z�e�:� �f�u�n�c�t�i�o�n�(�)� �{�
�
�	�	�r�e�t�u�r�n� �t�h�i�s�.�_�a�r�r�a�y�.�c�o�u�n�t�(�)�;�
�
�	�}�,�
�
�	�
�
�	�e�q�u�a�l�s�:� �f�u�n�c�t�i�o�n�(�v�a�l�u�e�)� �{�
�
�	�	�i�f� �(�!�(�v�a�l�u�e� �i�n�s�t�a�n�c�e�o�f� �C�o�l�l�e�c�t�i�o�n�)�)� �{�
�
�	�	�	�t�h�r�o�w� �n�e�w� �E�r�r�o�r�(�'�V�a�l�u�e� �m�u�s�t� �b�e� �a�n� �i�n�s�t�a�n�c�e� �o�f� �C�o�l�l�e�c�t�i�o�n�'�)�;�
�
�	�	�}�	�
�
�	�	�
�
�	�	�w�h�i�l�e�(�v�a�l�u�e�.�h�a�s�N�e�x�t�(�)�)� �{�
�
�	�	�	�i�f� �(�!�t�h�i�s�.�_�a�r�r�a�y�.�i�n�A�r�r�a�y�(�v�a�l�u�e�.�n�e�x�t�(�)�)�)� �{�
�
�	�	�	�	�r�e�t�u�r�n� �f�a�l�s�e�;�	�	�	�	�
�
�	�	�	�}�
�
�	�	�}�	�	�
�
�	�	�
�
�	�	�r�e�t�u�r�n� �t�r�u�e�;�
�
�	�}�
�
�}�)�;�