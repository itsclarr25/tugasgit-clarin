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

    @foreach ($genres as $item)
    <ul>
        <li>{{ $item['genre'] }}</li>
        <li>{{ $item['description'] }}</li>
    </ul>

    @endforeach
</body>