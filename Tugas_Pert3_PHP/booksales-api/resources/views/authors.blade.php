<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
</head>
<body>
    <h1>Hello world</h1>
    <p>Selamat datang di toko book sales</p>

    @foreach ($authors as $item)
    <ul>
        <li>{{ $item['name'] }}</li>
        <li>{{ $item['bio'] }}</li>
        <li>{{ $item['age'] }}</li>
    </ul>

    @endforeach
</body>